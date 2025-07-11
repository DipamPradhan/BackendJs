import mongoose,{Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
const videoSchema = new Schema({
    videoFile:{
        type:String, //cloudinary url
        required:true
    },
    thumbnail:{
        type:String, //cloudinary url
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    description:{
        type:String,
        trim:true,
        index:true
    },
    duration:{
        type:Number, //in seconds cloudinary url
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User", //reference to User model
    }


},{timestamps:true});



videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video",videoSchema)