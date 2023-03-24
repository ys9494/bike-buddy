import React, { useEffect } from "react";
import {
  MygatheringWrapper,
  MygatheringItems,
  MygatheringItem,
  EditButtonWrapper,
} from "./Mygathering-styled";
import { useMemo } from "react";
import { useMyGatheringList } from "../../hooks/gathering.hook";
import { useUserState } from "../../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
  // faPersonBiking,
  // faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { timeFormat } from "../../commons/utils";
import { Link, useNavigate } from "react-router-dom";
import * as API from "../../commons/api";

const Mygathering = () => {
  const { myGatheringList } = useMyGatheringList();
  const { isLoggedIn } = useUserState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log(myGatheringList);
  }, [myGatheringList]);

  const appliedGatheringList = useMemo(() => {
    return myGatheringList.filter((gathering) => {
      return gathering.gather_owner === "F";
    });
  }, [myGatheringList]);

  const ownGatheringList = useMemo(() => {
    return myGatheringList.filter((gathering) => {
      return gathering.gather_owner !== "F";
    });
  }, [myGatheringList]);

  /** 수정 */
  const goToEdit = (id) => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      navigate(`/gathering/${id}/edit`);
    }
  };

  /** 삭제 */

  const handleDelete = (id) => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        const result = API.delete(`/gathering/${id}`);
        alert("모임이 삭제되었습니다.");
        // console.log("삭제완료", result);
      }
    }
  };

  return (
    <MygatheringWrapper>
      <MygatheringItem>
        <label>참가신청한 모임</label>
        <br />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {appliedGatheringList &&
              appliedGatheringList?.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <MygatheringItems key={item.id} className="key">
                      <p>
                        <span>{item.title}</span>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>{timeFormat(item.start_time)}</span>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faClock} />
                        <span>{item.duration}분</span>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{item.rent_name}</span>
                      </p>
                      <button>참가취소</button>
                    </MygatheringItems>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </MygatheringItem>

      <MygatheringItem>
        <label>내가 만든 모임</label>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {ownGatheringList &&
              ownGatheringList?.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <MygatheringItems key={item.id}>
                      <p>
                        <span>{item.title}</span>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faCalendarDays} />
                        <span>{timeFormat(item.start_time)}</span>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faClock} />
                        <span>{item.duration}분</span>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>{item.rent_name}</span>
                      </p>
                      <EditButtonWrapper>
                        <button onClick={() => goToEdit(item?.id)}>수정</button>
                        <button onClick={() => handleDelete(item?.id)}>
                          삭제
                        </button>
                      </EditButtonWrapper>
                    </MygatheringItems>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </MygatheringItem>
    </MygatheringWrapper>
  );
};
export default Mygathering;
