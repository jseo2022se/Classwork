import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage() {
    return (
        <div className="homepage">
            <Header />
            <SearchBar />
            <EmployeeList />

        </div>
    )
}

export default HomePage;