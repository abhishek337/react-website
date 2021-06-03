import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="w-100 bg-light text-center my-4">
                <p>© {year} Ap Solutions, Inc. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </div>
    )
}

export default Footer
