import React, { useEffect } from "react";
import {
  MygatheringWrapper,
  MygatheringItems,
  MygatheringItem,
  EditButtonWrapper,
} from "./Mygathering-styled";
import { useMemo } from "react";
import { useMyGatheringList } from "../../hooks/gathering.hook";

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
import { ROUTE } from "../../routes/route";

const Mygathering = () => {
  const { myGatheringList } = useMyGatheringList();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

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

  /** 참가 취소 */
  const handleCancel = async (id) => {
    if (window.confirm("참가를 취소하시겠습니까?")) {
      const result = await API.delete(`/member/${id}`);
      alert("참가 취소되었습니다.");
      // console.log("참가 취소", result);
      navigate(ROUTE.GATHERING_LIST.link);
    }
  };

  /** 수정 */
  const goToEdit = (id) => {
    navigate(`/gathering/${id}/edit`);
  };

  /** 삭제 */
  const handleDelete = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const result = await API.delete(`/gathering/${id}`);
      alert("모임이 삭제되었습니다.");
      // console.log("삭제", result);
      navigate(ROUTE.GATHERING_LIST.link);
    }
  };

  return (
    <MygatheringWrapper>
      <h1>내 모임</h1>
      <MygatheringItem>
        <label>참가신청한 모임</label>
        <br />

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {appliedGatheringList &&
              appliedGatheringList?.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <MygatheringItems>
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

                      <button onClick={() => handleCancel(item.id)}>
                        참가취소
                      </button>
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
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <MygatheringItems>
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
