import Stepper from "@/components/Stepper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const ButtonDetail = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Detail</Button>
      </DialogTrigger>
      <DialogContent className="md:w-[800px] sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle className="text-white">Detail Order</DialogTitle>
          <DialogDescription>
            Detail order aaadadmakdladmalskml sadfadasd
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="mb-5 grid-cols-4 items-center gap-">
            <Stepper />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Order Id
            </Label>
            <Input id="name" defaultValue="#1234" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Status
            </Label>
            <Badge variant={"success"} className="w-fit">
              done
            </Badge>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonDetail;
