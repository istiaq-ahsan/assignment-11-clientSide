import axios from "axios";
import { useEffect, useState } from "react";
import MarathonsCard from "../components/marathonsCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const AllMarathons = () => {
  const [marathons, setMarathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  if (!marathons) {
    <LoadingSpinner></LoadingSpinner>;
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);

      fetchAllMarathons();
    }, 1200);
    return () => clearTimeout(delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, search]);

  const fetchAllMarathons = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/all-marathons?sort=${sort}&search=${search}`,
      marathons
    );
    setMarathons(data);
  };

  return (
    <div className="py-12">
      <Helmet>
        <title>SprintSphere | All Marathon</title>
      </Helmet>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-5 pb-10">
        <div
          className="flex overflow-hidden border bg-white
                    rounded-lg focus-within:ring focus-within:ring-opacity-40
                     focus-within:border-blue-400 focus-within:ring-blue-300"
        >
          <input
            className="px-6 py-3 text-gray-700 placeholder-gray-500
                             bg-white outline-none focus:placeholder-transparent"
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter Marathon Title"
            aria-label="Enter Marathon Title"
          />

          <button
            onClick={() => setSearch("")}
            className="px-4 m-1 rounded-md text-xs 
                        font-medium tracking-wider text-gray-100 
                        uppercase transition-colors duration-300 
                        transform bg-gray-700 hover:bg-gray-500
                         focus:bg-gray-600 focus:outline-none"
          >
            Reset
          </button>
        </div>
        <div className="mx-auto md:mx-0">
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
            className="py-3 px-2 border rounded-md"
          >
            <option value="">Sort By CreatedAt</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
          {marathons.map((marathon, index) => (
            <MarathonsCard key={index} marathon={marathon}></MarathonsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMarathons;
