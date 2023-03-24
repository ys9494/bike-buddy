import React, { useEffect } from "react";
import {
  MygatheringWrapper,
  MygatheringItems,
  MygatheringItem,
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
import { Link } from "react-router-dom";

const Mygathering = () => {
  const { myGatheringList } = useMyGatheringList();

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
                      <Link to={`/gathering/${item.id}/edit`}>
                        <span>수정</span>
                      </Link>
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
                      <button>
                        <Link to={`/gathering/${item.id}/edit`}>수정</Link>
                      </button>
                      <button>삭제</button>
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
