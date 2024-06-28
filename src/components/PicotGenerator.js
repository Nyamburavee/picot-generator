import React from "react";
import { useState } from "react";

const PicotGenerator = () =>{
    const [patient, setPatient] = useState('');
  const [intervention, setIntervention] = useState('');
  const [comparison, setComparison] = useState('');
  const [outcome, setOutcome] = useState('');
  const [time, setTime] = useState('');
  const [finalQuestion, setFinalQuestion] = useState('');

  const handlesubmit = (event) => {
    event.preventDefault()
    const question = `In ${patient}, how does ${intervention} compared to ${comparison} 
    affect ${outcome} within ${time}?`;
    setFinalQuestion(question);
  };

    return(
        <div className="main-container border border-spacing-2 border-blue-500 bg-gray-100 max-w-5xl mx-auto my-5 text-left p-4">
            <div className="description ">
                <h1 className="text-2xl font-bold mb-4">PICOT Question Generator for Nursing Students</h1>
                <p className="mb-4">As a nursing student, your evidence-based process should begin by asking a clinical question 
                    after you have identified the gap in practice. The word PICOT is a mnemonic derived from the elements of a
                    clinical practice question – patient, intervention, comparison, outcome, and (sometimes) time.</p>
                <p className="mb-4 ">The purpose of this PICOT question generator is to help nursing students conducting
                    evidence-based practice projects format questions and ensure that all elements are present.</p>
                <p className="mb-4 ">Kindly note that the accuracy and validity of the generated PICOT question 
                    are dependent on the input you provide.</p>
                <p className="mb-4 ">If you need help formulating a valid and feasible research question, place 
                    an order with us. While this PICOT question generator is free, our personalized services are 
                    offered at an affordable price because they are developed by our in-house PICOT question writers.</p>
                <h2 className="text-xl font-bold mb-2">How to use the free PICOT question generator:</h2>

                <ul className="list-none list-inside  mb-4">
                    <li> Step 1: Type the population/problem</li>
                    <li> Step 2:Type the intervention</li>
                    <li> Step 3:Type the comparison</li>
                    <li> Step 4:Type the outcome</li>
                    <li> Step 5:Type the time</li>
                </ul>
            </div>

           <form onSubmit={handlesubmit}>
                <div className="mb-4">
                    <label className="block font-medium text-gray-700"><span className=" font-extrabold">P</span> (Patient, Population/Problem)
                    <span className=" text-lg text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    value={patient}
                    onChange={(e) => setPatient(e.target.value)}
                    placeholder="Adult patients with type II diabetes "
                    className="mt-1 block w-3/4 border border-purple-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    required
                    />
                    <p className=" text-sm">Tip - Who or what is the patient, population, or problem in question?</p>
                </div>

                <div className="mb-4">
                    <label className="block font-medium text-gray-700"> <span className=" font-extrabold">I</span> (Intervention)
                    <span className=" text-lg text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    value={intervention}
                    onChange={(e) => setIntervention(e.target.value)}
                    placeholder="Digital foot self-management program"
                    className="mt-1 block w-3/4 border border-purple-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    required
                    />
                    <p className=" text-sm">Tip - What is the intervention being considered?</p>
                </div>

                <div className="mb-4">
                    <label className="block font-medium text-gray-700"><span className=" font-extrabold">C</span> (Comparison)
                    <span className=" text-lg text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    value={comparison}
                    onChange={(e) => setComparison(e.target.value)}
                    placeholder="Current practice"
                    className="mt-1 block w-3/4 border border-purple-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    required
                    />
                    <p className=" text-sm">Tip - What is currently being done in the practice setting?</p>
                </div>

                <div className="mb-4">
                    <label className="block font-medium text-gray-700"> <span className=" font-extrabold">O</span> (Outcome)
                    <span className=" text-lg text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    value={outcome}
                    onChange={(e) => setOutcome(e.target.value)}
                    placeholder="Self-care behavior"
                    className="mt-1 block w-3/4 border border-purple-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    required
                    />
                    <p className=" text-sm">Tip - What is the desired or expected outcome or objective?</p>
                </div>

                <div className="mb-4">
                    <label className="block font-medium text-gray-700"> <span className=" font-extrabold">T</span> (Time)
                    <span className=" text-lg text-red-500">*</span>
                    </label>
                    <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Eight weeks"
                    className="mt-1 block w-3/4 border border-purple-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    required
                    />
                    <p className=" text-sm">Tip - How long will it take to reach the desired outcome?</p>
                </div>

                <div className="w-3/4 flex justify-center items-center">
                    <button
                        type="submit"
                        className="px-4 m-auto w-32 py-2 bg-purple-500 text-white rounded-md"
                    >
                        Get PICOT
                    </button>
                </div>
                

                {finalQuestion && (
                    <div className="mt-4 w-3/4 p-4 bg-slate-300 border border-purple-400 rounded-md">
                        <h2 className="text-xl font-bold text-center mb-2">Results</h2>
                        <p>{finalQuestion}</p>
                    </div>
                )}
            </form>

        </div>
    );
};

    export default PicotGenerator