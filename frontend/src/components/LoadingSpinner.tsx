import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LoadingSpinner() {
  return (
    <div className={`flex 'justify-start mb-4`}>
      <div className="flex items-center mr-2">
        <AccountCircleIcon />
      </div>

      <div className={`rounded-lg  text-lg p-4 bg-primary-light-active text-[#1B2559]`}>
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-normal"></div>
        </div>
      </div>
    </div>
  );
}
