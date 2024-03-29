interface props {
  classname: string;
  title: boolean;
}
export const SearchSVG = ({ classname, title }: props) => {
  return (
    <svg
      className={classname}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L21.2929 22.7071ZM17 10C17 13.866 13.866 17 10 17V19C14.9706 19 19 14.9706 19 10H17ZM10 17C6.13401 17 3 13.866 3 10H1C1 14.9706 5.02944 19 10 19V17ZM3 10C3 6.13401 6.13401 3 10 3V1C5.02944 1 1 5.02944 1 10H3ZM10 3C13.866 3 17 6.13401 17 10H19C19 5.02944 14.9706 1 10 1V3ZM14.7929 16.2071L21.2929 22.7071L22.7071 21.2929L16.2071 14.7929L14.7929 16.2071Z"
        fill="#000000"
      />
    </svg>
  );
};

export default SearchSVG;
