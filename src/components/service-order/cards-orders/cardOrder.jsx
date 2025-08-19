/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import style from "./cardOrder.module.css"
import Stack from "@mui/material/Stack";
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

const CardOrder = ({name,number,date,time,onClick}) => {

    const [year, month, day] = date.split("T")[0].split("-");

  const formattedDate = `${day}/${month}`;


  return (
    <div className={style.card}>
        <Stack>
            <h1 className={style.date}>{formattedDate}</h1>
        </Stack>
        <Stack direction={'row'} justifyContent={'space-between'} gap={2}>
            <Stack gap={2}>
                <p className={style.tome}>Horário : {time}</p>
                <p className={style.name}>cliente : {name}</p>
                <p className={style.number}>contato : {number}</p>
            </Stack>
            <Stack>
                <IconButton onClick={onClick}>
                    <Delete color={'error'} sx={{ width: '30px', height: '30px'}}/>
                </IconButton>
            </Stack>
        </Stack>
    </div>
  );
}

export default CardOrder