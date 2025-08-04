import React from 'react';

function RewardsCard() {
  return (
    <div className="mt-6 p-4 bg-orange-100 rounded-lg text-left">
      <h3 className="font-semibold text-lg mb-2 text-orange-700">Unlockables</h3>
      <ul className="list-disc pl-6 text-gray-800">
        <li>Intern Badge</li>
        <li>Certificate of Appreciation</li>
        <li>Top Performer Spotlight</li>
      </ul>
    </div>
  );
}

export default RewardsCard;