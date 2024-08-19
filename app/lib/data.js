import { User } from "./models"
import { connectToDB } from "./utils";

export const fetchUser = async (q,page) => {
    const regex = new RegExp(q,"i") //uppercase ได้

    const ITEM_PER_PAGE = 2
    try{
        connectToDB()
        const users = await User.find({username: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return users;
    }catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
}

2.18 