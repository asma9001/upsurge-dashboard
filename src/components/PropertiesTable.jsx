import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Modern Waterfront Villa",
    location: "Miami, FL",
    price: "$2,500,000",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100",
  },
  {
    id: 2,
    title: "Downtown Luxury Penthouse",
    location: "New York, NY",
    price: "$1,200,000",
    status: "Active",
    statusColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100",
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Aspen, CO",
    price: "$450,000",
    status: "Sold",
    statusColor: "bg-gray-100 text-gray-600",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=100",
  },
];

const PropertiesTable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden">

    
      <div className="flex items-center justify-between px-4 sm:px-6 py-5">
        <h2 className="text-lg font-semibold text-[#111827]">
          Recent Properties
        </h2>

        <button
          onClick={() => navigate("/properties")}
          className=" cursor-pointer flex items-center gap-1 text-sm text-[#4B5563] font-medium hover:text-indigo-600 transition"
        >
          View All <HiArrowRight className="w-4 h-4" />
        </button>
      </div>


      <div className="hidden md:grid grid-cols-12 bg-[#F9FAFB] px-6 py-3 text-sm font-medium text-[#6B7280] border-t border-b border-[#E5E7EB]">
        <div className="col-span-8">Property</div>
        <div className="col-span-2 text-right">Price</div>
        <div className="col-span-2 text-center">Status</div>
      </div>

  
      {properties.map((item) => (
        <div
          key={item.id}
          className="px-4 sm:px-6 py-4 border-b border-[#E5E7EB] last:border-b-0"
        >
          <div className="flex flex-col md:grid md:grid-cols-12 md:items-center gap-4">

           
            <div className="md:col-span-8 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">
                  {item.location}
                </p>
              </div>
            </div>

          
            <div className="md:col-span-2 text-sm font-medium text-gray-900 md:text-right">
              <span className="md:hidden text-gray-500 mr-1">Price:</span>
              {item.price}
            </div>

            <div className="md:col-span-2 md:flex md:justify-center">
              <span
                className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${item.statusColor}`}
              >
                {item.status}
              </span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesTable;
