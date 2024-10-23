import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Account = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default Account;
