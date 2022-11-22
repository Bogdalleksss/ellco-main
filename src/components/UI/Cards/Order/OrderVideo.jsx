import React, { useState } from 'react';
import Button from "../../Button";
import OrderVideoInfo from "./OrderVideoInfo";
import OrderVideoEdit from "./OrderVideoEdit";

const OrderVideo = ({ cams }) => {
  const [showEdit, updateShowEdit] = useState(false);
  return (
    <div className="pt-4 pb-4 pl-4 pr-4">
      {
        showEdit
          ? <OrderVideoEdit cams={cams} />
          : <OrderVideoInfo cams={cams} />
      }

      <Button
        type={!showEdit ? 'secondary' : 'main'}
        className="mt-8 width-full"
        onClick={() => updateShowEdit(!showEdit)}
      >
        { showEdit ? 'Подтвердить' : 'Изменить' }
      </Button>
    </div>
  );
};

export default OrderVideo;
