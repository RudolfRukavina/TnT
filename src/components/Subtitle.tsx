interface ISubtitle {
  first: string;
  second: string;
  className?: string;
}

export default function Subtitle({ first, second, className }: ISubtitle) {
  return (
    <h2
      className={`text-xl lg:text-2xl flex flex-col capitalize items-center ${
        className ? className : ""
      } `}
    >
      <span className="text-yellowPrimary tracking-wide font-semibold ">
        {first}
      </span>
      <span className="font-bold tracking-widest">{second}</span>
    </h2>
  );
}
