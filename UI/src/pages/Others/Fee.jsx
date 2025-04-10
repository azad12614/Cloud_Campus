// src/pages/Fee.jsx
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import "./Fee.css";

function Fee() {
  return (
    <div className="fee-page pages">
      <Navbar />
      <Section text={"Fee Structures"} />

      <div className="fee-wrapper">
        <main className="fee-main">
          <div className="fee-container">
            <div className="fee-table-box">
              <div className="fee-table-wrapper">
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Description</th>
                      <th></th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>1st-3rd</td>
                      <td>4th-6th</td>
                      <td>7th-8th</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Admission Fees</td>
                      <td>30,000</td>
                      <td>30,000</td>
                      <td>30,000</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Semester Fees</td>
                      <td>15,000</td>
                      <td>14,000</td>
                      <td>12,000</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>Tuition Fees</td>
                      <td></td>
                      <td>Tk per credit</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>3.1</td>
                      <td>DC Regular</td>
                      <td>2590</td>
                      <td>2075</td>
                      <td>2050</td>
                    </tr>
                    <tr>
                      <td>3.2</td>
                      <td>URC Regular</td>
                      <td>1100</td>
                      <td>1100</td>
                      <td>1100</td>
                    </tr>
                    <tr>
                      <td>3.3</td>
                      <td>DC Retake</td>
                      <td>1295</td>
                      <td>1037.5</td>
                      <td>1025</td>
                    </tr>
                    <tr>
                      <td>3.4</td>
                      <td>URC Retake</td>
                      <td>550</td>
                      <td>550</td>
                      <td>550</td>
                    </tr>
                    <tr>
                      <td>3.5</td>
                      <td>DC Improvement</td>
                      <td>2590</td>
                      <td>2075</td>
                      <td>2050</td>
                    </tr>
                    <tr>
                      <td>3.6</td>
                      <td>URC Improvement</td>
                      <td>1100</td>
                      <td>1100</td>
                      <td>1100</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Exam Fee</td>
                      <td>300</td>
                      <td>300</td>
                      <td>300</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Establishment Fee</td>
                      <td>4000</td>
                      <td>4000</td>
                      <td>4000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="fee-calculator">
        <a
          className="fee-calculator-btn"
          href="https://www.iiuc.ac.bd/home/fee-calculator"
          target="_blank"
        >
          Fee Calculator
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Fee;
