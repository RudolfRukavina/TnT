export default function Spinner() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-24 w-24 border-t-4 rounded-full border-4 border-bgSecondary border-t-yellowPrimary animate-spin"></div>
    </div>
  );
}
