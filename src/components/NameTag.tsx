// eslint-disable-next-line import/no-extraneous-dependencies
import makeBlockie from 'ethereum-blockies-base64';
import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '@/context/GlobalContext';
import { truncateString } from '@/utils/truncateString';

const NameTag = () => {
  const { walletAddress, ensName } = useContext(GlobalContext);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (ensName && ensName !== '') {
      setDisplayName(ensName);
    } else if (walletAddress && walletAddress !== '') {
      setDisplayName(walletAddress);
    } else if (walletAddress === '') {
      setDisplayName('');
    }
  }, [walletAddress, ensName]);

  return (
    <div className="mb-4 mt-2 flex flex-row items-start justify-start">
      <div className="ml-5">
        {walletAddress && walletAddress !== '' && (
          <img
            className="h-16 w-16 rounded-md"
            src={makeBlockie(walletAddress)}
            alt="wallet blockie"
          />
        )}
      </div>
      <div className="ml-5">
        <p className="-mt-1 text-2xl">{displayName}</p>
        {displayName !== walletAddress && (
          <p className="mt-1 text-base text-gray-600">
            {truncateString(walletAddress)}
          </p>
        )}
      </div>
    </div>
  );
};

export default NameTag;
