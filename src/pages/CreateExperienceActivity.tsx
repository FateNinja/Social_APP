import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import SpeakerItem from "../components/SpeakerItem";
import { Speaker } from "../models/Speaker";
import { Session } from "../models/Schedule";
import { connect } from "../data/connect";
import * as selectors from "../data/selectors";

interface OwnProps {}

interface StateProps {
  speakers: Speaker[];
  speakerSessions: { [key: string]: Session[] };
}

interface DispatchProps {}

interface GroupsProps extends OwnProps, StateProps, DispatchProps {}

const Groups: React.FC<GroupsProps> = ({ speakers, speakerSessions }) => {
  return (
    <IonPage id="speaker-list">
      <IonContent>
        <div>
          <div className="container experience-settings">
            <div className="pt-4 px-2 pb-2 rounded-b-md shadow-md">
              <div className="flex justify-between items-center">
                <div className="">
                  <img src="assets/images/66/close.png" alt="" />
                </div>
                <span className="text-center">Add Activity</span>
                <a
                  className="text-xs bg-main-color text-white px-4 py-1 rounded-full"
                  href="#"
                >
                  Next
                </a>
              </div>
            </div>
            <div className="text-sm mt-5 px-3">
              <div className="flex">
                <div className="mr-2">
                  <img src="assets/images/66/Ellipse 32.png" alt="" />
                </div>
                <div>
                  <p className="font-medium">Jade Coleman</p>
                  <a
                    className="flex items-center border border-slate-200 rounded-full px-2 py-0.5 mt-0.5"
                    href="#"
                  >
                    <span className="text-xs text-gray-color mr-1">
                      Thai Vacation
                    </span>
                    <img src="assets/images/66/Path.png" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="px-3 mt-5">
              <input
                type="text"
                placeholder="Say something about this photo..."
                className="w-full text-xs p-2 border-0"
              />
            </div>
            <hr className="mt-2" />
            <div className="text-sm mt-5 px-3 h-96">
              <div>
                <div className="relative">
                  <img
                    className="w-full"
                    src="assets/images/66/new stoty@2x.png"
                    alt=""
                  />
                  <a href="#">
                    <img
                      className="absolute top-3 right-3 w-5"
                      src="assets/images/57/delete.png"
                      alt=""
                    />
                  </a>
                  <a
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.384)" }}
                    href="#"
                    className="flex items-center rounded-full absolute bottom-3 right-3 py-1 px-3"
                  >
                    <div>
                      <img
                        className="w-3"
                        src="assets/images/66/Stroke 1.png"
                        alt=""
                      />
                    </div>
                    <span className="ml-2 text-sm text-white">Cover</span>
                  </a>
                </div>
              </div>
              <div className="flex mt-1">
                <div className="grid grid-cols-3 gap-1">
                  <div className="relative">
                    <img
                      className="w-16 h-16"
                      src="assets/images/57/Rectangle 284.png"
                      alt=""
                    />
                    <a href="#">
                      <img
                        className="absolute top-1 right-1 w-5"
                        src="assets/images/57/delete.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      className="w-16 h-16"
                      src="assets/images/57/Rectangle 289.png"
                      alt=""
                    />
                    <a href="#">
                      <img
                        className="absolute top-1 right-1 w-5"
                        src="assets/images/57/delete.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <a
                    href="#"
                    className="bg-lines-color flex justify-center items-center"
                  >
                    <img
                      className="w-4"
                      src="assets/images/66/Plus.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed w-full bottom-0 left-0">
            <div className="flex justify-center items-center bg-lines-color py-2 rounded-t-lg">
              <div>
                <a href="#">
                  <img src="assets/images/66/Group 15.png" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="assets/images/66/Group 16.png" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="assets/images/66/Group 17.png" alt="" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="assets/images/66/Group 18.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  // mapStateToProps: (state) => ({
  //   // speakers: selectors.getGroups(state),
  //   // speakerSessions: selectors.getSpeakerSessions(state),
  // }),
  component: React.memo(Groups),
});