// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next);
//     }catch(err){
//          res.status(err.code || 500).json({
//             success: false,
//             message: err.message || "Internal Server Error"
//         });
//     }
// }

const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>{
            res.status(err.code || 500).json({
                success: false,
                message: err.message || "Internal Server Error"
            });
        });
    }
}

export default asyncHandler;


