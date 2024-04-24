import React from 'react';

const WritingCard = ({props}) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-700">{props?.writing?.name}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {props?.writing?.author?.name} {props?.writing?.author?.surname}
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                Published: {new Date(props?.writing?.dateOfPublication).toLocaleDateString()}
            </span>
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Rating: {props.averageRating}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Views: {props.views}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Comments: {props.commentsAmount}
        </span>
      </div>
    </div>
  );
};

export default WritingCard;