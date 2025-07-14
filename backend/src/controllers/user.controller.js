import User from "../models/User";

export const getRecommendedUsers = async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      $and: [
        { _id: { ne: currentUserId } }, // exclude current user
        { $id: { nin: currentUser.friends } }, // exclude cuurent user's friends
        { isOnboarded: true },
      ],
    });
    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.log("Error in get recommended users controller, ", error.message);
    return res.status(500).json({message:"Internal Server error"})
  }
};

export const getMyFriends = async (req, res) => {};
