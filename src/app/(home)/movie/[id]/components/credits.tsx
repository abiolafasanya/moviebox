import { creditsType } from '@/types/movie';
import Crew from './crew';

const Credits = ({ credits }: { credits: creditsType }) => {
  return (
    <div className='flex gap-2 flex-col mt-5'>
      {Array.isArray(credits.crew) &&
        credits.crew.length > 0 &&
        credits.crew
          .slice(0, 6)
          .toSorted()
          .map((crew) => <Crew key={crew.id+'_'+crew.credit_id} crew={crew} />)}
    </div>
  );
};

export default Credits;
