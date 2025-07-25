import { Link } from "react-router";
import getLanguageFlag from "../lib/utils";

const FriendCard = (friend) => {
  return (
    <div className="card bg-base-200 hover:shadow-md transition-shadow">
      {console.log("friend", friend)}
      <div className="card-body p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="avatar size-12">
            <img src={friend.friend.profilePic} alt={friend.friend.fullName} />
          </div>
          <h3 className="font-semibold truncate">{friend.friend.fullName}</h3>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="badge badge-secondary text-xs">
            {getLanguageFlag(friend.friend.nativeLanguage)}
            Native: {friend.friend.nativeLanguage}
          </span>

          <span className="badge badge-secondary text-xs">
            {getLanguageFlag(friend.friend.learningLanguage)}
            Learning: {friend.friend.learningLanguage}
          </span>
        </div>
        <Link to={`/chat/${friend.friend._id}`} className="btn btn-outline w-full">
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;
