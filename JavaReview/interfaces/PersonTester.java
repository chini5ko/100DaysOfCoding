import java.util.Arrays;

public class PersonTester{

    public static final void main(String[] args){
        Person[] people = new Person[4];

        people[0] = new Person("Lee", "Lee");
        people[1] = new Person("Eoe", "Eane");
        people[2] = new Person("Ioe", "Iane");
        people[3] = new Person("Bruce", "Bruce");

        //System.out.println(people[0].compareTo(people[1]));



        //Array has a method call sort (as long as we have implemented comparable Sort will works)
        Arrays.sort(people);
        //print 
        for(int i=0;i<Person.length;i++){
            System.out.println(Person[i]);
        }

        
    }
}