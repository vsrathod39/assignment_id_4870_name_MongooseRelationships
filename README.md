# assignment_id_4870_name_MongooseRelationships
 Mongoose Relationship
# end Points for sollowing queries
1. find books that are checked out?
> http://localhost:2345/checkedout/

2. find all books written by an author?
> http://localhost:2345/author/61b5e21fbb735be2876d446f  <--author id

3. find books in a section?
> http://localhost:2345/section/available/a  <--section
> http://localhost:2345/section/available/b
> http://localhost:2345/section/available/c

4. find books in a section that are not checked out?
> http://localhost:2345/section/available/a  <--section
> http://localhost:2345/section/available/b
> http://localhost:2345/section/available/c

5. find books of 1 author inside a section?
> http://localhost:2345/section/a/author/61b5e74d59c09d93814ae117  <--author id
> http://localhost:2345/section/b/author/61b5e74d59c09d93814ae117
> http://localhost:2345/section/c/author/61b5e74d59c09d93814ae117
