import { createBem } from '@/utils/createBem';
const bem = createBem('details', styles);

const DetailsItem = ({ data }) => {
  return (
    <li className={bem('item')}>
      {Array.isArray(data?.value) ? (
        <>
          <div className={bem('content')}>
            <h3 className={bem('title')}>Min {data.unit}</h3>
            <span className={bem('value')}>{data.value[0]}</span>
          </div>
          <div className={bem('content')}>
            <h3 className={bem('title')}>Max {data.unit}</h3>
            <span className={bem('value')}>{data.value[1]}</span>
          </div>
        </>
      ) : (
        <>
          <div className={bem('content')}>
            <h3 className={bem('title')}>{data.name}</h3>
            <span className={bem('value')}>{data.value}</span>
          </div>
        </>
      )}
    </li>
  );
};
export default DetailsItem;
