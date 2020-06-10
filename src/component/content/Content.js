import React from 'react';
import Styles from './Content.module.scss';
import Matrix from '../../containers/Matrix/Matrix';
import HelperSpinner from '../../helper/helperSpinner/HelperSpinner';

function Content() {
  const prop = {
    selection: [
      {
        title: 'Программирование на React',
        lectures: [
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 5,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 15,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 25,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 35,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 45,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 55,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 65,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 75,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 85,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 95,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 100,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 0,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 5,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 15,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 25,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 35,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 45,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 55,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 65,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 75,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 85,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 95,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 100,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 0,
          },
        ],
      },
      {
        title: 'Программирование на React',
        lectures: [
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 5,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 15,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 25,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 35,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 45,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 55,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 65,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 75,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 85,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 95,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 100,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 0,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 5,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 15,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 25,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 35,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 45,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 55,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 65,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 75,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 85,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 95,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 100,
          },
          {
            link: 'https://ru.react.js.org/docs/components-and-props.html',
            percent: 0,
          },
        ],
      },
    ],
  };
  const [isLoading, setIsLoading] = React.useState(true);
  const loadLectures = () => {
    setIsLoading(true);
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    loadLectures();
  }, []);

  if (isLoading) {
    return <HelperSpinner />;
  }

  return (
    <div className={Styles.Content}>
      <div className={Styles.Matrix}>
        {prop.selection.map((section, index) => {
          return (
            <Matrix
              title={section.title}
              lectures={section.lectures}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Content;
