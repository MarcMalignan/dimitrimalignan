import { useQuery } from '@tanstack/react-query';

import ContentPanel from '@components/ContentPanel';
import Page from '@components/Page';
import Video from '@components/Video';
import { Media } from '@types';
import { getData } from '@utils';
import './Videos.scss';

const Videos = () => {
  const { data: media } = useQuery({ queryKey: ['videos'], queryFn: () => getData<Media>('media') });

  return (
    <Page pageName="Videos">
      <ContentPanel>
        <div className="Videos-videos" itemScope itemType="http://schema.org/VideoGallery">
          {media?.videos.map(({ id, date, title, type }) => (
            <Video key={id} videoId={id} title={title} date={date} type={type} />
          ))}
        </div>
      </ContentPanel>
    </Page>
  );
};

export default Videos;
