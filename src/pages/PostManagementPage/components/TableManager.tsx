import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ButtonDetail from "@/pages/StaffPage/component/ButtonDetail";
import { IPost } from "@/types";
import { Eye, Inbox } from "lucide-react";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
interface TableManagerProps {
  data: IPost[];
  itemSelected: IPost[];
  limit: number;
  isLoading: boolean;
  handleCheckAll: (checked: boolean) => void;
  handleCheckItem: (checked: boolean, post: IPost) => void;
  isAdmin?: boolean;
}
const TableManager: FC<TableManagerProps> = ({
  data,
  itemSelected,
  limit,
  isLoading,
  handleCheckAll,
  handleCheckItem,
  isAdmin = true,
}) => {
  console.log("🚀 ~ isAdmin:", isAdmin);
  const navigate = useNavigate();
  const handleClick = useCallback(
    (id: number) => {
      navigate(`${id}`);
    },
    [navigate]
  );
  return (
    <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center w-5">
            <Checkbox
              disabled={isLoading || data?.length === 0}
              checked={itemSelected.length === limit}
              onCheckedChange={handleCheckAll}
            />
          </TableHead>
          <TableHead className="w-[100px] text-center font-bold text-sm">
            Id
          </TableHead>
          <TableHead className="text-center font-bold">User Id</TableHead>
          <TableHead className=" font-bold">Title</TableHead>
          <TableHead className="font-bold">Select Staff</TableHead>
          <TableHead className="font-bold">Order status</TableHead>
          <TableHead className="font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data?.map((item) => (
            <TableRow key={item.id}>
              <TableHead className="text-center">
                <Checkbox
                  checked={!!itemSelected.find((post) => post.id === item.id)}
                  onCheckedChange={(checked: boolean) =>
                    handleCheckItem(checked, item)
                  }
                />
              </TableHead>
              <TableCell className="font-medium text-center text-base">
                {item.id}
              </TableCell>
              <TableCell className="font-medium text-center text-base">
                {item.userId}
              </TableCell>
              <TableCell className="font-medium text-start text-base">
                {item.title}
              </TableCell>
              <TableHead className="font-bold">Staff A</TableHead>
              <TableHead className="font-bold">Delivered</TableHead>

              <TableCell className="font-medium text-start text-base">
                {isAdmin ? (
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    onClick={() => handleClick(item.id)}
                  >
                    <Eye />
                  </Button>
                ) : (
                  <ButtonDetail />
                )}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7}>
              <div className=" mx-auto my-32 flex flex-col items-center gap-3">
                <Inbox className="h-[100px] w-[100px] " />
                <h5 className="text-2xl">No orders available</h5>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableManager;
