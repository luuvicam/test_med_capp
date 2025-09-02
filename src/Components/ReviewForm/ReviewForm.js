import { useNavigate } from "react-router-dom";

const reviewsData = [
  { serialNumber: 1, doctorName: 'Dr. John Doe', specialty: 'Cardiology', review: 'Good doctor' },
  { serialNumber: 2, doctorName: 'Dr. Jane Smith', specialty: 'Dermatology' },
  { serialNumber: 3, doctorName: 'Dr. Alan Turing', specialty: 'Neurology' },
  { serialNumber: 4, doctorName: 'Dr. Grace Hopper', specialty: 'Oncology' },
];

function ReviewForm() {
  const navigate = useNavigate();
  const handleFeedbackClick = (doctor) => {
    navigate(`/reviews/${doctor.serialNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 sm:p-6 md:p-8 font-sans" style={{ 'marginTop': '60px', 'alignItems': 'center' }}>
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden mt-8 md:mt-16">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-gray-200 pb-4">
            Reviews
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-left whitespace-nowrap">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Serial Number</th>
                  <th className="py-3 px-6 text-left">Doctor Name</th>
                  <th className="py-3 px-6 text-left">Doctor Specialty</th>
                  <th className="py-3 px-6 text-left">Provide Feedback</th>
                  <th className="py-3 px-6 text-left">Review Given</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                {reviewsData.map((doctor, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {doctor.serialNumber}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {doctor.doctorName}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {doctor.specialty}
                    </td>
                    <td className="py-3 px-6 text-left">
                      <button 
                        onClick={() => handleFeedbackClick(doctor)}
                        disabled={doctor.review}
                        className={doctor.review ? "disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
                      >
                        Click Here
                      </button>
                    </td>
                    <td className="py-3 px-6 text-left">
                      {doctor.review ? doctor.review : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
