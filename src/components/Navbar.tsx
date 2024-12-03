export const Navbar = ({ setMenuOpen }: {
    setMenuOpen: () => void
}) => {
    return (
        <nav className="flex justify-between py-3 items-center border-b">
            {/* Search */}
            <div className=" rounded-md py-0.5 flex sm:bg-gray-50 sm:border sm:border-gray-300 sm:gap-0 peer-focus-within:shadow peer-focus-within:bg-white peer-hover:shadow mx-4">
                <svg
                    onClick={() => setMenuOpen()}
                    className="sm:hidden hoverable p-2" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill="#B2B2B2" />
                </svg>

                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none flex-1 hidden sm:flex pl-4 peer"
                />

                <svg className="hoverable p-2" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_218)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.958 7.40981C17.2465 9.8063 17.159 13.6043 14.7626 15.8928C12.3661 18.1814 8.5681 18.0939 6.27954 15.6974C3.99097 13.301 4.07846 9.50298 6.47494 7.21441C8.87142 4.92585 12.6694 5.01333 14.958 7.40981ZM16.8243 16.6039C19.3384 13.5225 19.2219 8.97893 16.4044 6.02854C13.353 2.83323 8.28898 2.71659 5.09367 5.76801C1.89836 8.81943 1.78171 13.8834 4.83313 17.0787C7.65066 20.0291 12.184 20.3547 15.3779 17.9851L17.4925 20.1995C17.874 20.5989 18.507 20.6135 18.9064 20.2321C19.3058 19.8506 19.3204 19.2176 18.9389 18.8182L16.8243 16.6039Z" fill="#B2B2B2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_218">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            {/* Options */}
            <div className="flex items-center gap-3">
                <svg className="hoverable p-1.5" width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2012 20C13.2453 20 14.0996 19.2615 14.0996 18.359H10.3027C10.3027 18.7942 10.5028 19.2116 10.8588 19.5194C11.2148 19.8271 11.6977 20 12.2012 20ZM17.8964 15.0769V10.9744C17.8964 8.45538 16.3397 6.34667 13.625 5.78872V5.23077C13.625 4.54974 12.989 4 12.2012 4C11.4133 4 10.7774 4.54974 10.7774 5.23077V5.78872C8.05312 6.34667 6.5059 8.44718 6.5059 10.9744V15.0769L5.28142 16.1354C4.68342 16.6523 5.10107 17.5385 5.94587 17.5385H18.447C19.2918 17.5385 19.7189 16.6523 19.1209 16.1354L17.8964 15.0769Z" fill="#B2B2B2" />
                    <circle cx="17" cy="7" r="4.5" fill="#FF5151" stroke="white" />
                </svg>
                <svg className="hoverable p-1.5 " width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6.09248C4 5.53752 4.21071 5.00529 4.58579 4.61287C4.96086 4.22046 5.46957 4 6 4H18C18.5304 4 19.0391 4.22046 19.4142 4.61287C19.7893 5.00529 20 5.53752 20 6.09248V14.4624C20 15.0173 19.7893 15.5496 19.4142 15.942C19.0391 16.3344 18.5304 16.5549 18 16.5549H8.414C8.14881 16.5549 7.89449 16.6652 7.707 16.8614L4.854 19.8463C4.78413 19.9196 4.69505 19.9696 4.59804 19.9898C4.50102 20.0101 4.40043 19.9999 4.309 19.9603C4.21757 19.9208 4.1394 19.8538 4.0844 19.7677C4.02939 19.6817 4.00002 19.5805 4 19.477V6.09248ZM9 10.2774C9 9.99995 8.89464 9.73383 8.70711 9.53762C8.51957 9.34142 8.26522 9.23119 8 9.23119C7.73478 9.23119 7.48043 9.34142 7.29289 9.53762C7.10536 9.73383 7 9.99995 7 10.2774C7 10.5549 7.10536 10.821 7.29289 11.0172C7.48043 11.2134 7.73478 11.3237 8 11.3237C8.26522 11.3237 8.51957 11.2134 8.70711 11.0172C8.89464 10.821 9 10.5549 9 10.2774ZM13 10.2774C13 9.99995 12.8946 9.73383 12.7071 9.53762C12.5196 9.34142 12.2652 9.23119 12 9.23119C11.7348 9.23119 11.4804 9.34142 11.2929 9.53762C11.1054 9.73383 11 9.99995 11 10.2774C11 10.5549 11.1054 10.821 11.2929 11.0172C11.4804 11.2134 11.7348 11.3237 12 11.3237C12.2652 11.3237 12.5196 11.2134 12.7071 11.0172C12.8946 10.821 13 10.5549 13 10.2774ZM16 11.3237C16.2652 11.3237 16.5196 11.2134 16.7071 11.0172C16.8946 10.821 17 10.5549 17 10.2774C17 9.99995 16.8946 9.73383 16.7071 9.53762C16.5196 9.34142 16.2652 9.23119 16 9.23119C15.7348 9.23119 15.4804 9.34142 15.2929 9.53762C15.1054 9.73383 15 9.99995 15 10.2774C15 10.5549 15.1054 10.821 15.2929 11.0172C15.4804 11.2134 15.7348 11.3237 16 11.3237Z" fill="#B2B2B2" />
                </svg>

                <div className="flex items-center sm:gap-2 mx-2">
                    <img
                        className="rounded-full h-10 w-10 hover:shadow-lg cursor-pointer z-10 bg-green-500"
                        src={`https://ui-avatars.com/api/?name=Admira John&background=random`}
                        alt="Admira John"
                    />
                    <p className="hidden sm:flex">Admira John</p>
                    <div className="relative w-8 h-8 hoverable p-2">
                        <svg className="absolute z-0 top-0 right-0 -translate-y-1 -translate-x-1" width="66" height="42" viewBox="0 0 66 42" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M49 20L54 24L59 20" stroke="#B2B2B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    )
}