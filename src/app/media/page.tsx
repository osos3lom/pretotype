
import Sidebar from '@/components/sidebar'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { FileType } from '../../../typings';
import TableWrapper from '@/components/table/TableWrapper';

export default async function MediaPage() {
  
  const docsResults = await getDocs(collection(db, "users"));
  const skeletonFiles: FileType[]= docsResults.docs.map(doc=>({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds*1000)|| undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  
  }));

  console.log(skeletonFiles);


  return (
    
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar/>
      
      <div className='ml-9 mt-6 mr-20'>
        
        <section className='container space-y-5'>
          <h2 className='text-center mt-6 text-4xl'>جميع الملفات</h2>
          <div>{/*table*/}
            <TableWrapper skeletonFiles={skeletonFiles}/>

            
          </div>

        </section>
      </div>


      
    </div>
  )
}
