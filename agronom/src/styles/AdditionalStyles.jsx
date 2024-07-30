export const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

export const indicator = {
    position: 'absolute', top: 0, left: '1833px', height: '59px', width: '59px', borderRadius: '50%'
}

export const buttonStyle = {
    boxShadow: "0 3px 3px 0 rgba(0, 0, 0, 0.16)",
    width: "273px",
    height: "52px",
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: "24px",
    color:"white",
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#3E8C41', // Darker shade on hover
    },
    '&:active': {
        backgroundColor: '#245526', // Darker shade on click
    },
}

export const inputField = {
    marginBottom: "48px", height: "52px", width: "502px", transform: 'none',
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.16)", fontSize: 30,
    fontFamily: "OpenSans, sans-serif", fontWeight: 400,
    paddingLeft:"10px",
}

export const nameOfFields = {
    position: 'absolute', color: '#4E3000', fontSize: 20,
    fontFamily: "OpenSans, sans-serif", fontWeight: 600
}

export const personalFieldStyle = {
    position: 'absolute',
    fontSize: 30,
    fontFamily: "OpenSans, sans-serif",
    fontWeight: 400,
    whiteSpace: 'nowrap',   // Prevent text from wrapping to the next line
    overflow: 'hidden',     // Hide the overflowing text
    textOverflow: 'ellipsis',
    textAlign: 'left',
    textTransform: 'none',
    color: '#000000'
}

export const popup = {
    position: "absolute",
    top: 363,
    left: 316,
    width: 1461,
    height: 581,
    background: "white",
    borderRadius: "30px",
    zIndex: 1001,
    alignItems: "center",
};

export const fieldStyle = {
    fontWeight: 600,
    fontSize: "32px",
    color: "#4e3000",
    marginBottom: "48px",
    marginTop: 0,
    height: "52px",
};