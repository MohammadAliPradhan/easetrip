import React, { useEffect, useState } from 'react'
import "./HotelSelectRoom.css"
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../../NavBar/NavBar';



function HotelRoom() {

    const [sroomNumber, setSRoomNumber] = useState(1);
    const [apiDetails, SetapiDetails] = useState();
    const [showThis, setShowThis] = useState();

    const location = useLocation();

    console.log("This is location", location);

    useEffect(() => {
        SetapiDetails(location?.state.rooms)
        console.log("hey", apiDetails);
    }, [])

    useEffect(() => {
        setSRoomNumber(sroomNumber)
    }, [])


    return (
        <>

            <Navbar />

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>

                <div style={{ width: "90%", display: "flex", justifyContent: "space-around", marginBottom: "20px", border: "1px solid darkgray" }}>
                    <h3>Room with breakfast</h3>
                    <h3>Room with break fast</h3>
                    <h3>Room with breakfast</h3>
                </div>
                {

                    apiDetails?.map((item) => {
                        return (
                            <div style={{
                                display: 'flex',
                                flexDirection: "row",
                                width: "90%", height: "auto", justifyContent: "center", borderBottom: "1px solid darkgray",
                                borderTop: "1px solid darkgray",
                                borderLeft: "1px solid darkgray", borderRight: "1px solid darkgray",
                                alignItems: "center",
                                justifyContent: "center"

                            }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    width: "100%", height: "100", position: "sticky",
                                    top: "122px", zIndex: "10"
                                }}>
                                    <div style={{ width: "33.33%", display: "flex" }}>
                                        <div style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: "13px", fontWeight: 500, borderRight: "1px solid gray" }}>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <h4>{item.bedDetail}</h4>
                                                <div style={{ display: "flex" }}>
                                                    <img style={{ width: "300px", height: "300px" }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                                                </div>
                                                <p>King Bed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ width: "33.33%", display: "flex" }}>
                                        <div style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: "13px", fontWeight: 500, borderRight: "1px solid gray" }}>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <span>Breakfast Included</span>
                                                <br />
                                                <br />
                                                <span>{item.cancellationPolicy}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ width: "33.33%", display: "flex" }}>
                                        <div style={{ backgroundColor: "#FFFFFF", width: "100%", fontSize: "13px", fontWeight: 500, borderRight: "1px solid gray" }}>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                                <h3>Breakfast Included</h3>
                                                <span>+ {item.costPerNight} Taxes & fees</span>
                                                <br />
                                                <span>(Per Night)
                                                </span>
                                                <br />
                                                <span>{item.cancellationPolicy}</span>
                                                <br /><br />

                                                <button style={{ marginTop: "50px" }}>Reserve</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>





        </>
    )
}

export default HotelRoom