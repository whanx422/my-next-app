'use client';

import DocumentEditor from '@/components/template/DocumentEditor';
import RightPanel from '@/components/organisms/RightPanel/RightPanel';
import { useRouter } from 'next/navigation';

const DocumentEditorPage = () => {
  const router = useRouter();

  const handleExploreTemplates = () => {
    router.push('/documentEditor/templates');
  };

  const handleUploadDocument = () => {
    router.push('/documentEditor/upload');
  };

  return (
    <>
      <DocumentEditor />
      <RightPanel
        onExploreTemplates={handleExploreTemplates}
        onUploadDocument={handleUploadDocument}
      />
    </>
  );
};

export default DocumentEditorPage;