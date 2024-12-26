
const ApplicantTable = ({ applicant }) => {
    const { title, firstName, lastName, contact, additionalInfo } = applicant
    return (
        <tr className="text-center text-gray-500">
            <td className='px-4 py-4  '>
                {title}
            </td>

            <td className='px-4 py-4'>
                {firstName}
            </td>
            <td className='px-4 py-4'>
                {lastName}
            </td>
            <td className='px-4 py-4'>
                {contact}
            </td>
            <td className='px-4 py-4'>
                {additionalInfo}
            </td>


        </tr >
    );
};

export default ApplicantTable;