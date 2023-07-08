import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const CarEvaluation = () => {
	return (
		<Helmet>
			<CommonSection title="Car Evaluation" />
			<Container>
				{/* <Form>
					<FormGroup className="booking__form d-inline-block me-4 mb-4">
						<select>
							<option>make</option>
							<option></option>
							<option></option>
							<option></option>
						</select>
					</FormGroup>
					<FormGroup className="booking__form d-inline-block ms-1 mb-4">
						<select>
							<option>model</option>
							<option></option>
							<option></option>
							<option></option>
						</select>
					</FormGroup>

					<FormGroup className="booking__form d-inline-block me-4 mb-4">
						<input
							type="number"
							name="floatField"
							id="floatField"
							placeholder="Year"
						/>
					</FormGroup>
					<FormGroup className="booking__form d-inline-block ms-1 mb-4">
						<input
							type="number"
							name="floatField"
							id="floatField"
							placeholder="Distance"
						/>
					</FormGroup>

					<FormGroup className="booking__form d-inline-block me-4 mb-4">
						<select>
							<option>Transmission</option>
							<option></option>
							<option></option>
							<option></option>
						</select>
					</FormGroup>
					<FormGroup className="booking__form d-inline-block ms-1 mb-4">
						<select>
							<option>Fuel</option>
							<option></option>
							<option></option>
							<option></option>
						</select>
					</FormGroup>
					<FormGroup>
						<button className="btn find__car-btn">Send</button>
					</FormGroup>
				</Form> */}
				<Form className="form">
					<div className=" d-flex align-items-center justify-content-between flex-wrap">
						<FormGroup className="select__group">
							<select>
								<option>make</option>
								<option></option>
								<option></option>
								<option></option>
							</select>
						</FormGroup>

						<FormGroup className="select__group">
							<select>
								<option>model</option>
								<option></option>
								<option></option>
								<option></option>
							</select>
						</FormGroup>

						<FormGroup className="select__group">
							<select>
								<option>Fuel</option>
								<option></option>
								<option></option>
								<option></option>
							</select>
						</FormGroup>

						<FormGroup className="select__group">
							<select>
								<option value="used">No Max Price</option>
								<option value="50,000 LE">50,000 LE</option>
								<option value="100,000 LE">100,000 LE</option>
								<option value="200,000 LE">200,000 LE</option>
								<option value="400,000 LE">400,000 LE</option>
								<option value="800,000 LE">800,000 LE</option>
								<option value="1,600,000 LE">1,600,000 LE</option>
								<option value="3,200,000 LE">3,200,000 LE</option>
								<option value="5,000,000 LE">5,000,000 LE</option>
							</select>
						</FormGroup>

						<FormGroup className="select__group">
							<select>
								<option value="used">All Distance</option>
								<option value="15 KM">15 KM</option>
								<option value="30 KM">30 KM</option>
								<option value="60 KM">60 KM</option>
								<option value="120 KM">120 KM</option>
								<option value="240 KM">240 KM</option>
								<option value="480 KM">480 KM</option>
								<option value="600 KM">600 KM</option>
								<option value="800KM">800KM</option>
							</select>
						</FormGroup>

						<FormGroup className="form__group">
							<button className="btn find__car-btn">Find Car</button>
						</FormGroup>
					</div>
				</Form>
			</Container>
		</Helmet>
	);
};

export default CarEvaluation;
