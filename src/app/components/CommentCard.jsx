import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const CommentCard= ({props}) => {
 const rate = props.rate

 const renderRating = () => {
    const stars = [];
    const filledStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i}  />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half"/>);
    }
    const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };

  return (
    <div className="border border-pink-500 rounded-md p-2 my-3 w-[500px]">
        <div className="text-xl italic font-bold">{props.user?.name}</div>
        <div className="flex">{renderRating()}</div>
        <div className="ml-2">{props.comment}</div>
    </div>
  );
};

export default CommentCard;