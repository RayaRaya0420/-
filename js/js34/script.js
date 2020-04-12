const arr = [3, 5, 2, 4, 1, 66, 88];

for (let i = 0 ; i < arr.length ; i++){

    for (let j = i+1; j < arr.length; j++){

        if (arr[i]>arr[j]){

            const b = arr[i];
            arr[i] = arr[j];
            arr[j] = b;

        }

    }

}
document.write(arr);
