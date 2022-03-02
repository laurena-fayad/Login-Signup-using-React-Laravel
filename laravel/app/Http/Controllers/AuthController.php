<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request){
    	$validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->createNewToken($token);
    }
    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    /**
     * Update User Info
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateProfile(Request $request) {
        $userId =Auth::id();
        $user = User::findOrFail($userId);

        if($request->email != null){
            if ($request->email == $user->email){
                return response()->json([
                    'message' => 'Email already set.',
                    'user' => $user
                ], 201);    
            }
            $validator = Validator::make($request->email, [
                'email' => 'required|string|email|max:100|unique:users',
            ]); 

            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }

            $user->fill([
                'email' => $request->email,
            ]);
            $user->save();
            return response()->json([
                'message' => 'Email updated',
                'user' => $user
            ], 201);
        }

        if($request->name != null){
            $validator = Validator::make($request->name, [
                'name' => 'required|string|between:2,100',
            ]); 

            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }

            $user->fill([
                'name' => $request->name,
            ]);
            $user->save();
            return response()->json([
                'message' => 'Name updated',
                'user' => $user
            ], 201);
        }
        
        if($request->password != null){
            $validator = Validator::make($request->password, [
                'password' => 'required|string|confirmed|min:6',
            ]); 

            if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
            }

            $user->fill([
                'password' =>bcrypt($request->password)
            ]);
            $user->save();
            return response()->json([
                'message' => 'Password updated',
                'user' => $user
            ], 201);
        }
    }
    
    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile() {
        return response()->json(auth()->user());
    }
    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}