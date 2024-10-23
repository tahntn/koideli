import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center px-3 py-3 mx-auto  lg:py-0 my-[100px]">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-white">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-black">Login</CardTitle>
              <CardDescription>
                Sign in and Get lots of Cashback Rewards and Discount
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-black">
                  Email
                </Label>
                <Input
                  id="name"
                  defaultValue=""
                  className="bg-white text-black"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="pass" className="text-black">
                  Password
                </Label>
                <Input
                  id="pass"
                  defaultValue=""
                  className="bg-white text-black"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-black text-white">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-black">
                Create Filght World Account
              </CardTitle>
              <CardDescription>
                For security, please sign in to access your information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-black">
                  Email
                </Label>
                <Input
                  id="name"
                  defaultValue=""
                  className="bg-white text-black"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="pass" className="text-black">
                  Password
                </Label>
                <Input
                  id="pass"
                  defaultValue=""
                  className="bg-white text-black"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="confirm" className="text-black">
                  Confirm password
                </Label>
                <Input
                  id="confirm"
                  defaultValue=""
                  className="bg-white text-black"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-black text-white">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    // <section className="">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //           Sign in to your login
    //         </h1>
    //         <form className="space-y-4 md:space-y-6" action="#">
    //           <div>
    //             <label
    //               for="email"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Your email
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               placeholder="name@company.com"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               for="password"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               placeholder="••••••••"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               required=""
    //             />
    //           </div>
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-start">
    //               <div className="flex items-center h-5">
    //                 <input
    //                   id="remember"
    //                   aria-describedby="remember"
    //                   type="checkbox"
    //                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
    //                   required=""
    //                 />
    //               </div>
    //               <div className="ml-3 text-sm">
    //                 <label
    //                   for="remember"
    //                   className="text-gray-500 dark:text-gray-300"
    //                 >
    //                   Remember me
    //                 </label>
    //               </div>
    //             </div>
    //             <a
    //               href="#"
    //               className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
    //             >
    //               Forgot password?
    //             </a>
    //           </div>
    //           {/* <button
    //             type="submit"
    //             className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //           >
    //             Sign in
    //           </button> */}
    //           <Button className="w-full bg-slate-950 text-white hover:bg-slate-600">
    //             Signin
    //           </Button>
    //           <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //             Don’t have an login yet?{" "}
    //             <a
    //               href="#"
    //               className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-black"
    //             >
    //               Sign up
    //             </a>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Login;
