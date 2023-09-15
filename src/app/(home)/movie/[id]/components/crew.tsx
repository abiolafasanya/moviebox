import { crewType } from '@/types/movie';

const Crew = ({ crew }: { crew: crewType }) => {
  return (
    <div className='flex gap-5 flex-col mt-5'>
      <div className='flex gap-3'>
        <span>{crew.known_for_department}:</span>
        <span className='text-pink-500'>{crew.original_name}</span>
      </div>
    </div>
  );
};

export default Crew;
