import {
  CONTENT_INFO_CARD_3_A,
  CONTENT_INFO_CARD_3_B,
  CONTENT_INFO_CARD_3_APPLICANTS,
} from "@constants";
import CustomButton from "@/components/CustomButton";
import CustomInfoBox from "@/components/CustomInfoBox";
import { v4 } from "uuid";
import "./styles.css";
import { useState } from "react";

const ApplicantsCards = () => {
  const { articleTitle, articleContent, shareBtn } = CONTENT_INFO_CARD_3_A;
  const { applicantsTitle, starImg, profileBtn } = CONTENT_INFO_CARD_3_B;
  const items = CONTENT_INFO_CARD_3_APPLICANTS;
  const idGenerator = v4;
  const [candidateIndex, setCandidateIndex] = useState(0);
  const selectedCandidate = items[candidateIndex];
  const handleCandidateCard = (index) => {
    setCandidateIndex(index);
  };
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-y-6">
      <div className="article__how__card row-span-1 grid grid-cols-1 xsm:grid-cols-3 md:grid-cols-4 w-[95%] h-[90%] mx-auto">
        <div className="flex flex-col gap-2 xsm:gap-4 xsm:col-span-2 md:col-span-3">
          <h6>{articleTitle}</h6>
          <p className="">{articleContent}</p>
        </div>
        <div className="col-span-1 self-start justify-self-center xsm:justify-self-end pb-2 xsm:pb-0">
          <CustomButton content={shareBtn} styleClass="rounded__btn" />
        </div>
      </div>
      <div className="grid grid-cols-10 gap-x-3 row-span-2">
        <div className="applicants__card col-span-6 grid grid-cols-1 grid-rows-5 gap-y-4 h-[90%]">
          <h5 className="row-span-1 self-start">{applicantsTitle}</h5>
          <ul className="row-span-5 grid grid-cols-1 gap-y-0 md:gap-y-5">
            {items.map(({ applicantImg, member, stars }, index) => (
              <li
                className="grid grid-cols-7 gap-x-2 md:gap-x-6 h-10"
                key={idGenerator()}
              >
                <div
                  className="applicant__item col-span-5 grid grid-cols-4 h-10 cursor-pointer"
                  onClick={() => handleCandidateCard(index)}
                >
                  <img
                    className="col-span-1"
                    src={applicantImg}
                    alt="Applicant profile"
                  />
                  <span className="col-span-3 self-center">{member}</span>
                </div>
                <div className="applicant__stars col-span-2 grid grid-cols-2 h-6 self-center">
                  <img
                    className="col-span1 scale-75 lg:scale-90 xl:scale-100"
                    src={starImg}
                    alt="Star Symbol"
                  />
                  <span className="col-span1">{stars}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="candidate__card col-span-4 grid grid-cols-1 grid-rows-5 h-[89%] self-end">
          <img
            className="place-self-center row-span-2 scale-[1.8]"
            src={selectedCandidate.applicantImg}
            alt="Applicant Profile"
          />
          <div className="row-span-1">
            <h6 className="justify-self-center">{selectedCandidate.member}</h6>
            <p className="justify-self-center">
              {selectedCandidate.applicantRole}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center justify-self-center row-span-1">
            <div className="col-span-1 justify-self-stretch self-center">
              <span className="candidate__commits">
                {selectedCandidate.applicantCommits}
              </span>
            </div>
            <div
              className="
                         col-span-1 row-span-1 grid grid-cols-2 
                         self-center justify-self-center md:justify-self-end
                        "
            >
              <img
                className="scale-75 lg:scale-90 xl:scale-100"
                src={starImg}
                alt="Star Symbol"
              />
              <span className="candidate__stars">
                {selectedCandidate.stars}
              </span>
            </div>
          </div>
          <div className="row-span-2 self-center mx-auto">
            <CustomInfoBox content={profileBtn} styleClass="profile__btn" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicantsCards;
