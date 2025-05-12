const SummaryCards = ({ total }) => {
    const activeUsers = Math.floor(total * 0.7);
    const newSignups = Math.floor(total * 0.2);

    console.log("SummaryCards - Calculations:", {
        total,
        activeUsers,
        newSignups
    });

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="bg-blue-500 text-white p-4 rounded shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                <p className="text-3xl font-bold">{total}</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                <p className="text-3xl font-bold">{activeUsers}</p>
            </div>
            <div className="bg-purple-500 text-white p-4 rounded shadow-lg">
                <h3 className="text-lg font-semibold mb-2">New Signups</h3>
                <p className="text-3xl font-bold">{newSignups}</p>
            </div>
        </div>
    );
};

export default SummaryCards;
