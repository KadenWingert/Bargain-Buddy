import React from 'react';
import Image from "next/image";


interface StarRatingProps {
    stars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ stars }) => {
    const filledStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    const emptyStars = Math.floor(5 - stars);

    const starImages = [];

    // Filled stars
    for (let i = 0; i < filledStars; i++) {
        starImages.push(
            <Image
                key={`filled-star-${i}`}
                src="/assets/icons/filled-star.svg"
                alt="filled-star"
                width={16}
                height={16}
            />
        );
    }

    // Half-filled star
    if (hasHalfStar) {
        starImages.push(
            <Image
                key="half-filled-star"
                src="/assets/icons/half-filled-star.svg"
                alt="half-filled-star"
                width={16}
                height={16}
            />
        );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starImages.push(
            <Image
                key={`empty-star-${i}`}
                src="/assets/icons/empty-star.svg"
                alt="empty-star"
                width={16}
                height={16}
            />
        );
    }

    return (
        <div className="flex gap-3">
            {starImages.map((star, index) => (
                <React.Fragment key={index}>{star}</React.Fragment>
            ))}
            <p className="text-sm text-primary-orange font-semibold">{stars}</p>
        </div>
    );
};

export default StarRating;
