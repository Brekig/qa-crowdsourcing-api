import authenticate from "./authenticate";
import register from "./register";
import resetPassword from "./resetPassword";
import { RouteBuilder } from "../../utils";

export default RouteBuilder.routerForEndpoints([
	{
		route: "/authenticate/",
		controller: authenticate,
		method: "post",
	},
	{
		route: "/register",
		controller: register,
		method: "post",
	},
	{
		route: "/reset-password",
		controller: resetPassword,
		method: "post",
	}
]);
