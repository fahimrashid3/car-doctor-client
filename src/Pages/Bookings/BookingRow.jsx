import Swal from "sweetalert2";

const BookingRow = ({ booking, handelDeleteOrder, handelStatusChange }) => {
  const {
    _id,
    img,
    customerName,
    email,
    date,
    phoneNumber,
    service,
    price,
    status,
  } = booking;
  return (
    <div>
      <div className="md:flex items-center justify-between gap-5 hidden">
        <button
          onClick={() => handelDeleteOrder(_id)}
          className="btn btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="avatar">
          <div className="w-24 rounded">
            <img src={img} />
          </div>
        </div>
        <div className="lg:flex-1">
          <p className="font-bold text-lg">{service}</p>
          <p>{customerName}</p>
          <p>$ {price}</p>
        </div>
        <div className="lg:text-center lg:flex-1">
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </div>
        <div className="lg:flex-1">{date}</div>
        <div className="lg:flex-1">
          {status === "confirm" ? (
            <button className="btn btn-outline btn-success">confirm</button>
          ) : (
            <button
              className="btn btn-outline btn-warning"
              onClick={() => handelStatusChange(_id)}
            >
              Pending
            </button>
          )}
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl grid md:hidden max-w-screen-sm ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service}</h2>
          <div className=" flex gap-2">
            <p>
              <span className="font-bold">Name :</span>
              {customerName}
            </p>
            <p>
              <span className="font-bold">Price: </span> $ {price}
            </p>
            <p>
              <span className="font-bold">Date: </span>
              {date}
            </p>
          </div>
          <div className="flex gap-5">
            <p>
              <span className="font-bold">Email:</span> {email}
            </p>
            <p>
              <span className="font-bold">Number:</span> {phoneNumber}
            </p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handelDeleteOrder(_id)}
              className="btn btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {status === "confirm" ? (
              <button className="btn btn-outline btn-success">confirm</button>
            ) : (
              <button
                className="btn btn-outline btn-warning"
                onClick={() => handelStatusChange(_id)}
              >
                Pending
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRow;
