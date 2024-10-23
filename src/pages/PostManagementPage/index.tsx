import PostManagement from "./components/PostManagement";


const PostManagementPage = () => {


  return (
    <div className="px-5 ">
      <div className="flex justify-between items-center mb-5 mt-5">
        <h3 className="text-3xl font-bold tracking-tight text-start">Orders Management</h3>
      </div>
     <PostManagement/>
     
    </div>
  );
};

export default PostManagementPage;
